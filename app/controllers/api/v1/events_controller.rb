
class Api::V1::EventsController  < ApplicationController
  protect_from_forgery with: :null_session

  # GET /api/v1/events
  def index
    events = Event.all.order('start_time ASC')
    render json: serializer(events)
  end

  # POST /api/v1/events
  def create
    event = Event.new(event_params)
    if event.save
      render json: serializer(event)
    else
      render json: errors(event), status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :start_time, :end_time)
  end

  def serializer(records)
    EventSerializer
      .new(records)
      .serializable_hash
      .to_json
  end

  def errors(record)
    { errors: record.errors.messages }
  end
end