# Required imports
import os
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
ach_ref = db.collection('achievements')

@app.route('/achievements', methods=['GET'])
def get_achievements():
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    name = request.args.get("name")
    docs = ach_ref.where("name", "==", name).stream()

    results = []

    for doc in docs:
        results.append(doc.to_dict())

    return jsonify(results), 200
    

port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port)