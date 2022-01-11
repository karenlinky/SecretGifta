from helper.sql_helper import SqlHelper
from queries.user_queries import UserQueries

class User:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.user_queries = UserQueries(self.db)

    def search_by_user_name(self, request, requester_id):
        keyword = request.args.get("keyword")
        searchSelf = request.args.get("searchSelf") == 1

        users = self.user_queries.search_user_by_username(keyword)

        result = []

        for user in users:
            if searchSelf or (requester_id != user[0]) :
                result.append({
                    "id": user[0],
                    "username": user[1],
                    "pinned": False,
                })

        return {"users": result}
