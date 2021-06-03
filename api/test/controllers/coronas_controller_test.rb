require 'test_helper'

class CoronasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @corona = coronas(:one)
  end

  test "should get index" do
    get coronas_url, as: :json
    assert_response :success
  end

  test "should create corona" do
    assert_difference('Corona.count') do
      post coronas_url, params: { corona: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show corona" do
    get corona_url(@corona), as: :json
    assert_response :success
  end

  test "should update corona" do
    patch corona_url(@corona), params: { corona: {  } }, as: :json
    assert_response 200
  end

  test "should destroy corona" do
    assert_difference('Corona.count', -1) do
      delete corona_url(@corona), as: :json
    end

    assert_response 204
  end
end
