class ChatroomController < ApplicationController
  before_action :require_user

  def index
    @messages = Message.last_20_messages
    @message = Message.new
  end
  
end