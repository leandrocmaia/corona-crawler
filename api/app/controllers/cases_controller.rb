class CasesController < ApplicationController
  before_action :set_corona, only: [:show, :update, :destroy]

  # GET /cases
  def index
    @cases = CrawlerCase.all

    render json: @cases
  end

  # POST /cases
  def create
    @case = CrawlerCase.where(location: case_params[:location]).first_or_initialize
    @case.save

    if @case.update(case_params)
      render json: @case, status: :created
    else
      render json: @case.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cases/1
  def update
    if @case.update(case_params)
      render json: @case
    else
      render json: @case.errors, status: :unprocessable_entity
    end
  end

  # DELETE /case/1
  def destroy
    @case.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case
      @case = CrawlerCase.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def case_params
      params.require(:case).permit(:location, :total, :new, :deaths)
    end

    def respond_with(resource, _opts = {})
      render json: resource
    end

    def respond_to_on_destroy
      head :no_content
    end
end
