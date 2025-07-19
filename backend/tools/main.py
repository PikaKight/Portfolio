import skill.skills as sk

from pprint import pprint

skills = {}

def view_skills():

    skill_list = sk.get_skills()

    for skill in skill_list:

        skills[skill["name"]] = skill["des"]

def add_skill():
    skill_name = input("\tSkill Name: ")
    skill_desc = input("\n\tSkill Description: ")

    sk.upload_skill({
        "name": skill_name,
        "des": skill_desc
    })

def delete_skill():
    
    skill_names = list(skills.keys())

    for i, name in enumerate(skill_names):
        print(f"\t {i+1}: {name}")

    choice = int(input("\tWhich Skill to Delete (Number Only): ")) - 1

    skill =  {
        "name": skill_names[choice],
        "des": ""
    }

    sk.delete_skill(skill)

    skills.pop(skill_names[choice])

def main():

    view_skills()

    while True:
        menu = """
            Portfolio Tools
        
            1. View Skills
            2. Add New Skill
            3. Delete Skill
            4. Quit 
        """

        choice = int(input(menu))

        match choice:

            case 1:
                print("\n")
                view_skills()
                pprint(skills)
            case 2:
                print("\n")
                add_skill()
            case 3:
                print("\n")
                delete_skill()
            case 4:
                return
            case _:
                pass

if __name__ == "__main__":
    main()