import os
import pymongo.mongo_client

from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel

load_dotenv('.env')

client = pymongo.mongo_client.MongoClient(os.getenv("mongodb_url"))
skills_col = client["Profile"]["Skills"]

app = FastAPI()

class Skill(BaseModel):
    name: str
    des: str

@app.get("/allSkills")
def get_skills():

    try:
        skills = skills_col.find({}, {'_id': 0})

        res = []

        for skill in skills:
            res.append(skill)

        return {
            "msg": "Skills Found",
            "skills": res
        }
    except Exception as e:

        return {
            "msg": "Skills Not Found",
            "error": str(e)
        }
    
@app.post("/newSkill")
def add_skill(skill: Skill):


    if skills_col.find_one({"name": skill.name}):
        return {"msg": "Skill Already Exists"}
    
    try:
        skills_col.insert_one({
            "name": skill.name,
            "des": skill.des
        })

        return {"msg": "Skill Successfully Added"}
    
    except Exception as e:
       return {
            "msg": "Skill Could Not Be Added",
            "error": str(e)
        }

@app.post("/updateSkill")
def update_skill(skill: Skill):

    if not skills_col.find_one({"name": skill.name}):
        return {"msg": "Skill Already Exists"}
    
    try:
        skills_col.update_one({"name": skill.name},{ "$set": {
            "name": skill.name,
            "des": skill.des
        }})
        return {"msg": "Skill Successfully Updated"}


    except Exception as e:
        return {
            "msg": "Skill Could Not Be Updated",
            "error": str(e)
        }
    
@app.post("/deleteSkill")
def delete_skill(skill: Skill):

    if not skills_col.find_one({"name": skill.name}):
        return {"msg": "Skill Does Not Exists"}
    
    try:
        skills_col.delete_one({"name": skill.name})
        return {"msg": "Skill Successfully Delete"}


    except Exception as e:
        return {
            "msg": "Skill Could Not Be Deleted",
            "error": str(e)
        }