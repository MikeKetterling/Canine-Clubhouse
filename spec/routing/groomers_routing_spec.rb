require "rails_helper"

RSpec.describe GroomersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/groomers").to route_to("groomers#index")
    end

    it "routes to #show" do
      expect(get: "/groomers/1").to route_to("groomers#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/groomers").to route_to("groomers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/groomers/1").to route_to("groomers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/groomers/1").to route_to("groomers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/groomers/1").to route_to("groomers#destroy", id: "1")
    end
  end
end
