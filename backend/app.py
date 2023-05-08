import os
from flask import Flask, request, jsonify,send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route('/upload', methods=['POST'])
def upload_file():
    # check if the post request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    
    # check if the file is a PDF file
    if not file.filename.endswith('.pdf'):
        return jsonify({'error': 'Only PDF files are allowed'}), 400
    
    # create a temporary directory to save the uploaded file
    tmp_dir = os.path.join(app.root_path, 'tmp')
    if not os.path.exists(tmp_dir):
        os.makedirs(tmp_dir)
    
    # save the file to the temporary directory
    file.save(os.path.join(tmp_dir, "current.pdf"))
    
    return jsonify({'success': 'File uploaded successfully'}), 200


@app.route("/pdf")
def pdf_send():
    path = 'C:/Users/anche/Desktop/SearchBot/backend/tmp/current.pdf'
    return send_file(path)
