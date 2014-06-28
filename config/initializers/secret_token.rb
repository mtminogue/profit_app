# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
require 'securerandom'

def secure_token
  token_file = Rails.root.join('.secret')
  if File.exist?(token_file)
    # Use the existing token.
   	File.read(token_file).chomp
  else
    # Generate a new token and store it in token_file.
   	token = SecureRandom.hex(64)
    File.write(token_file, token)
    token
  end
end
ProfitApp::Application.config.secret_key_base = '90885f3ecfe6c5936b99b40929233ae918264f3dee4432babade694ffa874f7457f2a7ea7d9190e8d6e557315379518882552f74fe582b38b7ec61ac8de4a2fe'
