# create function to fetch API 
# create function to fetch API with query
# create function to fetch API with query and filter

import requests

def fetch_api():
    response = requests.get('https://api.publicapis.org/entries')
    return response.json()
