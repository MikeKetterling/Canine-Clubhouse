require "rails_helper"

RSpec.describe ServiceAppointmentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/service_appointments").to route_to("service_appointments#index")
    end

    it "routes to #show" do
      expect(get: "/service_appointments/1").to route_to("service_appointments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/service_appointments").to route_to("service_appointments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/service_appointments/1").to route_to("service_appointments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/service_appointments/1").to route_to("service_appointments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/service_appointments/1").to route_to("service_appointments#destroy", id: "1")
    end
  end
end
