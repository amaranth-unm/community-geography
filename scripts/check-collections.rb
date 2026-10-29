#!/usr/bin/env ruby
require 'jekyll'
require 'json'
require 'nokogiri'

output = File.expand_path(ARGV.fetch(0, '_site'))
site = Jekyll::Site.new(Jekyll.configuration('source' => Dir.pwd, 'destination' => output, 'quiet' => true))
site.read # Also runs record schema, date, image, and grouping validation.
events, news, people = %w[events news people].map { |name| site.collections.fetch(name).docs }
index = JSON.parse(File.read(File.join(output, 'assets/search-index.json')))
base = site.baseurl
base = YAML.load_file('_config.ci.yml').fetch('baseurl', base) if File.file?('_config.ci.yml')
urls = index.map { |entry| entry['url'].delete_prefix(base) }
errors = []
errors << 'Duplicate search URLs' unless urls.uniq == urls
(events + news).each do |record|
  errors << "Missing output: #{record.url}" unless File.file?(File.join(output, record.url.delete_prefix('/')))
  errors << "Missing search record: #{record.url}" unless urls.include?(record.url)
end
people.each do |record|
  record.data['groups'].each do |group|
    url = group == 'team' ? '/about/our-team.html' : '/about/affiliates.html'
    entry = index.find { |item| item['url'].delete_prefix(base) == url }
    errors << "Missing searchable biography: #{record.data['name']}" unless entry && entry['content'].include?(record.data['name'])
  end
end
gallery = Nokogiri::HTML(File.read(File.join(output, 'projects/gis-day-2025-gallery.html')))
errors << 'Gallery lost photographs' unless gallery.css('.record-gallery img').size == site.data['gis-day-gallery'].size
gallery.css('.record-gallery img').each { |image| errors << "Gallery link missing: #{image['src']}" unless image.parent.name == 'a' && image.parent['href'] == image['src'] }

abort errors.join("\n") unless errors.empty?
puts "Checked #{events.size} events, #{news.size} news records, #{people.size} people: metadata, output, search, gallery passed."
