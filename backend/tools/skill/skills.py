import requests
import os

from dotenv import load_dotenv

load_dotenv('.env')

url = os.getenv("backend_url")

def upload_skill(skill:dict):

    api_url = f"{url}/newSkill"

    res = requests.post(api_url, json=skill)

    return res.json()

def delete_skill(skill: dict):

    api_url = f"{url}/deleteSkill"

    res = requests.post(api_url, json=skill)

    return res.json()

def get_skills():

    api_url = f"{url}/allSkills"

    res = requests.get(api_url)

    return res.json()['skills']


if __name__ == "__main__":
    
        
    skill = {
        "name": "test",
        "des": "test"
    }

    print(upload_skill(skill))

    print(get_skills())

    print(delete_skill(skill))

    print(get_skills())
