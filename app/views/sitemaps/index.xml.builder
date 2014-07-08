base_url = "http://#{request.host_with_port}"
xml.instruct! :xml, :version=>'1.0'
xml.tag! 'urlset', 'xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9' do

	@static_pages.each do |page|
		xml.url {
			xml.loc "#{page}"
			xml.changefreq("monthly")
			xml.priority(0.9)
		}
	end
end