class HomeController < ApplicationController
  def index
    @contact = Contact.new
  end

  def contact
  end
end
