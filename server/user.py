from helper.sql_helper import SqlHelper
from queries.user_queries import UserQueries

class User:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.user_queries = UserQueries(self.db)

    def search_by_user_name(self, request):
        keyword = request.args.get("keyword")
        # data = request.get_json()
        # username = data["username"]

        users = self.user_queries.search_user_by_username(keyword)

        result = []

        for user in users:
            result.append({
                "id": user[0],
                "username": user[1],
                "pinned": False,
            })

        return {"users": result}
