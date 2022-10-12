# Reformat file
import re

with open("export.csv", "r",encoding='utf-8') as f:
    with open("cleaned.csv", "w",encoding='utf-8') as f2:
        for cnt, line in enumerate(f):
            if cnt == 0:
                line = line.replace(',', '|')
            else:
                line = re.sub(r',(?=(((?!\}).)*\{)|[^\{\}]*$)', '|', line)
            f2.write(line)

# Read into data frame
import pandas as pd


df = pd.read_csv('cleaned.csv', sep='|', error_bad_lines=False, index_col=False)
print("Total")
print(len((list(df["email"])) ))

print("Not Started")
rslt_df = df[df['status'] == "Not Started"] 
print(len((list(rslt_df["email"])) ))
print(', '.join(list(rslt_df["email"])))

print("Submitted")
rslt_df = df[df['status'] == "Submitted"] 
print(len((list(rslt_df["email"])) ))
print(', '.join(list(rslt_df["email"])))
