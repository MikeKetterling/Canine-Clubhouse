require "rails_helper"

RSpec.describe RoomAppointmentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/room_appointments").to route_to("room_appointments#index")
    end

    it "routes to #show" do
      expect(get: "/room_appointments/1").to route_to("room_appointments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/room_appointments").to route_to("room_appointments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/room_appointments/1").to route_to("room_appointments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/room_appointments/1").to route_to("room_appointments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/room_appointments/1").to route_to("room_appointments#destroy", id: "1")
    end
  end
end
