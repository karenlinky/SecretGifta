import mysql.connector

from dotenv import load_dotenv
load_dotenv()
import os

class SqlHelper:
    def __init__(self):
        try:
            self.db = mysql.connector.connect(
                host=os.environ.get("DB_HOST"),
                user=os.environ.get("DB_USER"),
                passwd=os.environ.get("DB_PW"),
                database=os.environ.get("DB_NAME"),
                auth_plugin='mysql_native_password'
            )
            self.cursor = self.db.cursor()
        except Exception as e:
            raise Exception("Failed to connect to database: " + str(e))

    def execute(self, query):
        try:
            self.cursor.execute(query)
        except Exception as e:
            raise Exception("Failed to execute query (" + query + "): " + str(e))

    def commit(self):
        try:
            self.db.commit()
        except Exception as e:
            raise Exception("Failed to commit: " + str(e))

    def execute_and_return(self, query):
        try:
            self.cursor.execute(query)
            return self.cursor.fetchall()
        except Exception as e:
            raise Exception("Failed to execute query (" + query + ") and return result: " + str(e))
