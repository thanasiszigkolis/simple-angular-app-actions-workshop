# Να δημιουργήσετε ένα workflow αρχείο για CI που:
# Τρέχει όταν γίνεται push ή pull_request στο main branch
# Κάνει checkout τον κώδικα
# Εγκαθιστά Node.js έκδοση 18
# Εγκαθιστά dependencies με npm ci
# Τρέχει tests της Angular

#Οδηγίες:
# 1. Δώστε ένα όνομα στο workflow
# 2. Ορίστε τα triggers (on:) για push και pull_request στο branch "main"
# 3. Δημιουργήστε ένα job που θα εκτελείται σε ubuntu-22.04 runner
# 4. Προσθέστε τα παρακάτω βήματα (steps):
#     - Checkout του κώδικα
#     - Εγκατάσταση Node.js 18
#     - Εγκατάσταση dependencies με npm ci
#     - Εκτέλεση tests

#Bonus:
# - Ανεβάστε τον φάκελο dist/ ως artifact
#Υποβολή:
# Κάντε commit το αρχείο ως `.github/workflows/exercise.yml` στο repository σας
# και ελέγξτε την εκτέλεση στο GitHub Actions tab.
