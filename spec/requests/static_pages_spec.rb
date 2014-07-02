require 'spec_helper'

describe "StaticPages" do

  subject { page }

  shared_examples_for "all static pages" do
    it { should have_selector('h1', text: heading) }
    it { should have_title(full_title(page_title)) }
    it { should have_link('Home', href: root_path) }
    it { should have_link('Gross Profit Calculator', href: gross_profit_calculator_path) }
    it { should have_link('Markup Calculator', href: markup_calculator_path) }
    it { should have_link('Sales Lift Calculator', href: sales_lift_calculator_path) }
    it { should have_link('Work to Goal Calculator', href: work_to_goal_calculator_path) }
  end

  describe "Home page" do
  	
  	before { visit root_path }
  	let(:heading)    { 'ProfitCruncher' }
    let(:page_title) { '' }

    it_should_behave_like "all static pages"
    it { should_not have_title('| Home') }
  end

  describe "Gross Profit page" do
  	before { visit gross_profit_calculator_path }

  	let(:heading) { 'Gross Profit' }
  	let(:page_title) { 'Gross Profit Calculator' }

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

  describe "Work to Goal page" do
  	before { visit work_to_goal_calculator_path }

  	let(:heading) { 'Work to Goal' }
  	let(:page_title) { 'Work to Goal Calculator' }

  	it_should_behave_like "all static pages"
  end
end
