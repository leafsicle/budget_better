require "application_system_test_case"

class AccountsTest < ApplicationSystemTestCase
  setup do
    @account = accounts(:one)
  end

  test "visiting the index" do
    visit accounts_url
    assert_selector "h1", text: "Accounts"
  end

  test "creating a Account" do
    visit accounts_url
    click_on "New Account"

    fill_in "Amount Due", with: @account.amount_due
    fill_in "Due Date", with: @account.due_date
    fill_in "Frequency", with: @account.frequency
    fill_in "Name", with: @account.name
    fill_in "Notes", with: @account.notes
    fill_in "Paid", with: @account.paid
    fill_in "Payment", with: @account.payment
    fill_in "Remaining", with: @account.remaining
    fill_in "Type", with: @account.type
    click_on "Create Account"

    assert_text "Account was successfully created"
    click_on "Back"
  end

  test "updating a Account" do
    visit accounts_url
    click_on "Edit", match: :first

    fill_in "Amount Due", with: @account.amount_due
    fill_in "Due Date", with: @account.due_date
    fill_in "Frequency", with: @account.frequency
    fill_in "Name", with: @account.name
    fill_in "Notes", with: @account.notes
    fill_in "Paid", with: @account.paid
    fill_in "Payment", with: @account.payment
    fill_in "Remaining", with: @account.remaining
    fill_in "Type", with: @account.type
    click_on "Update Account"

    assert_text "Account was successfully updated"
    click_on "Back"
  end

  test "destroying a Account" do
    visit accounts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Account was successfully destroyed"
  end
end
