# Required imports
import os, datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from firebase_admin import credentials, firestore, initialize_app

# Initialize Flask app
app = Flask(__name__)
CORS(app)

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
    id = request.args.get("id")
    name = request.args.get("name")
    date = request.args.get("date")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")

    query = ach_ref

    if id is not None:
        return get_achievements_by_id(id)

    if name is not None:
        query = query.where("name", "array_contains", name.lower().title())

    if date is not None:
        try:
            date_object = datetime.datetime.strptime(date, "%Y%m%d").date()
            query = query.where("year", "==", date_object.year).where("month", "==", date_object.month).where("day", "==", date_object.day)

        except:
            return jsonify(error=400, message="Invalid date! Please format date as yyyymmdd"), 400
    else:
        if start_date is not None:
            query = query.where("date", ">=", int(start_date))   
        if end_date is not None:
            query = query.where("date", "<=", int(end_date))     


    results = [doc.to_dict() for doc in query.stream()]
    for result in results:
        result[u'name'] = result[u'name'][0]

    return jsonify(results), 200

@app.route("/achievements/<id>", methods=["GET"])
def get_achievements_by_id(id):
    doc = ach_ref.document(id).get().to_dict()

    if doc is None:
        return jsonify(error=400, message="No achievement exists with that id"), 400
    else:
        return jsonify(doc), 200
    

port = int(os.environ.get('PORT', 8080))
if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port)