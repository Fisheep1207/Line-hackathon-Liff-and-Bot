import pymysql.cursors
import mysql.connector
import sys
import datetime
import matplotlib.pyplot as plt
from pylab import figure, axes, pie, title, show

#4, 6為time/date
maxdb = mysql.connector.connect(host='ao9moanwus0rjiex.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                            	user='z2v4wxa4d92rulpo',
                            	charset='utf8mb4',
                            	password = "g3uqk5s2wyvtoq3r",
                            	database = "vsine0ibs4j6lk5u")

cursor = maxdb.cursor()
# read
userName = sys.argv[2]
cursor.execute("SELECT * FROM "+userName )
names = [description[0] for description in cursor.description]

result = cursor.fetchall()
myTable = []
dates = []
values = []


for row in result:
    myTable.append(row)

def drawThis(ColumnName):
    global dates, values, myTable, names

    myIndex = names.index(ColumnName)
    print(myIndex)

    for i in range(len(myTable)):
        dates.append(myTable[i][1])
        values.append(myTable[i][myIndex])

csfont = {'fontname':'Comic Sans MS'}
hfont = {'fontname':'Helvetica'}

colName = sys.argv[3]

drawThis(colName)

fig = plt.figure(figsize = (10,5))
plt.title(colName, **hfont)
plt.xlabel("Date and Time", **csfont)
plt.xticks(rotation = 45)
plt.ylabel(colName+ " Values", **csfont)
plt.plot_date(dates, values, '-', label = colName)
plt.plot_date(dates, [120]*len(values), '-', label = "Standard")
plt.legend()
plt.grid()

# fig.savefig("/Users/rong/Desktop/line fresh/"+userName+"-"+colName+".png")
fig.savefig("./{}-{}.png".format(username, colaName))
plt.show()





