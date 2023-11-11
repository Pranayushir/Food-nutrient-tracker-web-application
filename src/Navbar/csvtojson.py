import pandas as pd
import json

# Read the CSV file
df = pd.read_csv('ABBREV.csv')

# Convert DataFrame to JSON
json_data = df.to_json(orient='records')

# Write JSON data to a file
with open('output.json', 'w') as json_file:
    json_file.write(json_data)
# python csv_to_json.py