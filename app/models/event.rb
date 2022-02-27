class Event < ApplicationRecord
  validates :title, presence:true, length: { maximum: 32 }
  validates :description, length: { maximum: 280 }
  validates :start_time, :end_time, presence:true
end
