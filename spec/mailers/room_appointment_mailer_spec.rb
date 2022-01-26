require "rails_helper"

RSpec.describe RoomAppointmentMailer, type: :mailer do
  describe "new_appointment_confirmation" do
    let(:mail) { RoomAppointmentMailer.new_appointment_confirmation }

    it "renders the headers" do
      expect(mail.subject).to eq("New appointment confirmation")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
