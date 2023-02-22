from motor import motor_asyncio

client = motor_asyncio.AsyncIOMotorClient(
    "mongodb+srv://rootadmin:rootadmin@ctci-database.zqvob0u.mongodb.net/?retryWrites=true&w=majority")
db = client.crackTheCI
companyCollection = db.companies


async def create(data):
    data = dict(data)
    try:
        await companyCollection.insert_one(data)
        return True
    except:
        return False


async def get_all_companies():
    companies = []
    response = companyCollection.find({}, {"_id": 0})
    for document in await response.to_list(length=100):
        companies.append(document)
    return companies


async def get_unverified_companies():
    companies = []
    response = companyCollection.find({"verified": False}, {"_id": 0})
    for document in await response.to_list(length=100):
        companies.append(document)
    return companies
