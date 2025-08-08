from app import app

from flask import render_template



@app.route("/")
def landing():

    return render_template("landing.html")

@app.route("/architectural-controlnet-demo")
def demo():
    
    return render_template("demo.html")