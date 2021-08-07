import git
import os
from python_on_whales import docker


directory = os.getcwd()

def git_pull_change(directory):

    repo = git.Repo(directory)
    current = repo.head.commit

    repo.remotes.origin.pull()

    if current == repo.head.commit:
        print("Repo did not change.")
        return False
    else:
        print("Repo changed!")
        return True


while True:

    if git_pull_change(directory):

        os.chdir("./src")

        try:
            print("Pruning current deployment.")
            print(docker.compose.down([]))

        except:
            pass
    
        finally:
            #print(docker.system.prune(all=True, volumes=True, force=True))
            print(docker.image.prune(all=True))
            print(docker.container.prune())
            print(docker.volume.prune())
    
            print("Redeploying!")
            print(docker.compose.up([]))
    break
