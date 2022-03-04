require 'rails_helper'

RSpec.describe Event, type: :model do
  context 'validation tests' do
    it 'ensure title presence' do
      event = Event.new(start_time: DateTime.new(2022,3,15,13,00), end_time: DateTime.new(2022,3,15,22,00)).save
      expect(event).to eq(false)
    end

    it 'ensure start-date presence' do
      event = Event.new(title: 'title', end_time: DateTime.new(2022,3,15,22,00)).save
      expect(event).to eq(false)
    end

    it 'ensure end-date presence' do
      event = Event.new(title: 'title', start_time: DateTime.new(2022,3,15,13,00)).save
      expect(event).to eq(false)
    end
    it 'should save successfully' do
      event = Event.new(title: 'title', start_time: DateTime.new(2022,3,15,13,00), end_time: DateTime.new(2022,3,15,22,00)).save
      expect(event).to eq(true)
    end

    it 'ensure that title is less than 32 characters' do
      event = Event.new(title: 'abcdefghijklmnopqrstuvwxyz0123456')
      title_length = event.title.length <= 32
      expect(event.title.length <= 32).to eq(false)
    end

    it 'ensure that description is less than 100 characters' do
      description = ""
      101.times do
        a = 'a'
        description.concat(a) 
      end
      event = Event.new(description: description)
      expect(event.description.length <= 100).to eq(false)
    end
  end
end
