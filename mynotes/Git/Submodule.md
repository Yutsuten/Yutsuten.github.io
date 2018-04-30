```shell
# Add submodule
git submodule add git@github.com:url_to/submodule.git path_to_submodule

# If there are new submodules, initialize them
git submodule init

# Update submodule (changes in remote but not locally)
git submodule update
git submodule update --init       # Initialize if it isn't
git submodule update --recursive  # Update recursively (submodules inside submodules)
git submodule update --remote     # Update submodules to the latest commit (needed?)

# Pull with submodules
git pull --recurse-submodules

# Clone with submodules
git clone --recurse-submodules
```
