require 'test_helper'

class CoronaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get corona_index_url
    assert_response :success
  end

  test "should get create" do
    get corona_create_url
    assert_response :success
  end

  test "should get update" do
    get corona_update_url
    assert_response :success
  end

end
