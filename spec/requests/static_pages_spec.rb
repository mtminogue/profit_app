require 'spec_helper'

describe "StaticPages" do

  subject { page }

  shared_examples_for "all static pages" do
    it { should have_selector('h1', text: heading) }
    it { should have_title(full_title(page_title)) }
    it { should have_link('Home', href: root_path) }
    it { should have_link('Gross Profit Margin Calculator', href: gross_profit_calculator_path) }
    it { should have_link('Markup Calculator', href: markup_calculator_path) }
    it { should have_link('Sales Lift Calculator', href: sales_lift_calculator_path) }
    it { should have_link('Promotion Recap', href: promotion_recap_calculator_path) }
    it { should have_link('ProfitCrunch', href: profitcrunch_path) }
  end

  describe "Home page" do
  	
  	before { visit root_path }
  	let(:heading)    { 'ProfitCruncher' }
    let(:page_title) { '' }

    it_should_behave_like "all static pages"
    it { should_not have_title('| Home') }
  end

  describe "ProfitCrunch page" do
  	before { visit profitcrunch_path }

  	let(:heading) { 'ProfitCrunch' }
  	let(:page_title) { 'ProfitCrunch' }

  	it_should_behave_like "all static pages"
  end

  describe "Gross Profit page" do
  	before { visit gross_profit_calculator_path }

  	let(:heading) { 'Gross Profit Margin' }
  	let(:page_title) { 'Gross Profit Margin Calculator' }

  	it_should_behave_like "all static pages"
  end

  describe "Markup page" do
  	before { visit markup_calculator_path }

  	let(:heading) { 'Markup' }
  	let(:page_title) { 'Markup Calculator' }

  	it_should_behave_like "all static pages"
  end

  describe "Sales Lift page" do
  	before { visit sales_lift_calculator_path }

  	let(:heading) { 'Sales Lift' }
  	let(:page_title) { 'Sales Lift Calculator' }

  	it_should_behave_like "all static pages"
  end

  describe "Promotion Recap page" do
  	before { visit promotion_recap_calculator_path }

  	let(:heading) { 'Promotion Recap' }
  	let(:page_title) { 'Promotion Recap Calculator' }

  	it_should_behave_like "all static pages"
  end
end
