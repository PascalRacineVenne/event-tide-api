class EventSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :start_time, :end_time
end
