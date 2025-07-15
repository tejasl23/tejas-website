from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/multiply', methods=['POST'])
def multiply():
    data = request.get_json()
    number = data['number']
    result = int(number) * 5
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
