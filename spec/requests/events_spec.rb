require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe "POST /api/v1/events" do
    let(:valid_attributes) do
      { 
        "data": {
          'type': 'events',
          'title': 'test title',
          'description': 'test description',
          'start_time': 'test start time',
          'end_time': 'test end time'
        }
      }.to_json
    end

    context 'when request is valid' do
      before { post '/api/v1/events', params: valid_attributes, headers: headers }
    
      it 'creates an events' do
        expect(json['data']['data'][0]['attributes']['title']).to eq('test title')
      end
    end
  end
end
