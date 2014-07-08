class SitemapsController < ApplicationController
	def index
		@static_pages = [root_url, profitcrunch_url, gross_profit_calculator_url, markup_calculator_url, sales_lift_calculator_url, promotion_recap_calculator_url]
		respond_to do |format|
			format.xml
		end
	end
end
