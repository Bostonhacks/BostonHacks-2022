import json
import datetime 

# Before running!
# Login to bostonhacks.io and Go to /admin and check console.log for the array of jsons for each appplication
# Then, paste array in export.csv

input_file = open ('export.csv')
json_array = json.load(input_file)
store_list = []

# Filtering to columns we care about
# And providing default values
for item in json_array:
    store_details = {"email":None, "status":None, "college":None, "phase": None, "dob" : None, "dateOfBirth": None, "id": None}
    store_details['email'] = item['email']
    store_details['status'] = item['status']
    store_details['id'] = item['id']
    if 'college' in item:
        store_details['college'] = item['college']['value']
    if 'phase' in item:
        store_details['phase'] = '2'
    store_details["dob"] = "Under 18"
    if "dateOfBirth" in item:
        store_details["dateOfBirth"] = item['dateOfBirth']
        try:
            dob = datetime.datetime.strptime(item["dateOfBirth"],"%Y-%m-%d").date() 
            today=datetime.date.today()
            days=today-dob
            if (days.days > 6560):
                store_details["dob"] = "Over 18"

        except:
            store_details["dob"] = "Under 18"

    store_list.append(store_details)

# List of people to accept (anyone who submitted and is over 18)
over = [x for x in store_list if "Over 18" == x['dob'] and x['phase'] is None]

# List of people to reject due to being too young
under = [x for x in store_list if x['status'] == 'Submitted' and "Under 18" == x['dob']]

# List of people who confirmed
confirmed = [x for x in store_list if x['status'] == 'Confirmed']
print(len(confirmed))
BU = [x for x in store_list if x['status'] == 'Confirmed' and 'Boston University' in x['college']]
print(len(BU))

# List of people who have not responded yet
accepted = [x for x in store_list if x['status'] == 'Accepted']
print(len(accepted))
emails = [x['email'] for x in accepted]
print(emails)