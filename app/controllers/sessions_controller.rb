class SessionsController < ApplicationController
  def new

  end

  def create_artist
    # artist = Artist.find_by_email(params[:email])
    # p "xxxxxxxx"
    # respond_with("xxxxx")


    # if artist && params[:password]
    #   session[:artist_id] = artist.id
    #   session[:identity] = "artist"
    #   render json: {artist}
    #   # redirect_to "/gallery"
    # else
    #   render json: {error: @artist.errors.messages}
    #   # redirect_to "/gallery"
    # end
  end

  def create_client
    # client = Client.find_by_email(params[:email])
    p "xxxxx"
    # respond_to? ("xxxx")

    @clients = Client.all
      render json: @clients

    

    # respond_to do |format|
    #   format.html
    #   format.xml { render :xml => @people.to_xml }
    # end

    # if client && client = Client.authenticate_with_credentials(params[:email],params[:password])
    #   session[:client_id] = client.id
    #   session[:identity] = "client"
    #   redirect_to "/gallery"
    # else
    #   redirect_to "/gallery"
    # end
  end

  def destroy
    session[:artist_id] = nil
    session[:client_id] = nil
  end
end