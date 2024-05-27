import os
from flask import Flask, request, jsonify, render_template,redirect
import smtplib
from email.mime.text import MIMEText
from flask import*
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

@app.route("/")
def show_form():
    print("11")
    return render_template("index.html")

@app.route("/index")
def index():
    print("index")
    return redirect (url_for("show_form"))

@app.route("/indexSection")
def indexSection():
    print("indexSection")
    return render_template ("index.html")

@app.route("/about")
def about():
    print("about")
    return render_template ("about.html")
@app.route("/pro")
def pro():
    print("pro")
    return render_template("products.html")
@app.route("/indus")
def indus():
    print("industries")
    return render_template("industries.html")
@app.route("/contactSection")
def contactSection():
    print("contact")
    return render_template ("index.html")





@app.route("/productSection")
def productSection():
    print("productSection")
    return render_template("products.html")
@app.route("/aboutSection")
def aboutSection():
    print("aboutSection")
    return render_template("about.html")
@app.route("/industriesSection")
def industriesSection():
    print("industriesSection")
    return render_template("industries.html")


# about
@app.route("/abtStrategy")
def abtStrategy():
    print("abtStrategy")
    return render_template("strategy.html")
@app.route("/abtHistory")
def abtHistory():
    print("abtHistory")
    return render_template("history.html")
@app.route("/abtProducts")
def abtProducts():
    print("abtProducts")
    return render_template("products.html")
@app.route("/abtLocation")
def abtLocation():
    print("abtLocation")
    return render_template("locations.html")


# products
@app.route("/product1")
def product1():
    print("productPumps")
    return render_template("produ1.html")
@app.route("/product2")
def product2():
    print("productValves")
    return render_template("produ2.html")
@app.route("/product3")
def product3():
    print("productPower")
    return render_template("produ3.html")
@app.route("/product4")
def product4():
    print("productPower")
    return render_template("produ4.html")
@app.route("/product5")
def product5():
    print("Intersial Valves")
    return render_template("produ5.html")
@app.route("/product6")
def product6():
    print("Control Works")
    return render_template("produ6.html")
@app.route("/product7")
def product7():
    print("Activation")
    return render_template("produ7.html")
@app.route("/product8")
def product8():
    print("Directional control")
    return render_template("produ8.html")
@app.route("/product9")
def product9():
    print("Throttle valve")
    return render_template("produ9.html")
@app.route("/product10")
def product10():
    print("PVR1T Variable")
    return render_template("produ10.html")
@app.route("/product11")
def product11():
    print("HPV43 Double")
    return render_template("produ11.html")
@app.route("/product12")
def product12():
    print("Cartridge Valve")
    return render_template("produ12.html")

@app.route("/log")
def log():
    return render_template("form.html")



# @app.route("/senw", methods=['POST', "GET"])
# def senw():
    
#     name=request.form.get("name") 
#     a=name
#     whatnum=request.form.get("whatnum")
#     b=whatnum
    
#     c= [" ","A", "B", "C", "D", "E", "F", "G", "H", "I", ".","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i",'j',"k" "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
#     d=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] 
#     e=len(a)
    
#     f=len(b)
    

#     if e>0 :
        
#         if all(i in c for i in a) :
                        
#             if f==10:
#                     if all(i in d for i in b):
#                         mail="enterthemail@gmail.com"
#                         password="enter the password above the mail"

#                         tomail="sweetarts1410@gmail.com"

#                         # Create email message
#                         msg = MIMEText(b)
#                         msg['Subject']=a
#                         msg['From'] =mail 
#                         msg['To'] =tomail
#                         try:
#                             # Enable security for Gmail (use port 587)
#                             server = smtplib.SMTP('smtp.gmail.com', 587)
#                             server.starttls()
#                             # server.login(request.form.get("fmail"), password) 
                            
#                             server.login(mail, password)
                            
#                             server.sendmail(msg['From'],msg['To'],msg.as_string())
#                             server.quit()
                            
#                             return render_template("mailssucess.html")
#                         except Exception as e:
#                             return f"Failed to send email: {e}"
                                                  
#             else:
#                   print("please enter the 10 digit mobil number")
#                   return render_template("tendigit.html")
#         else:
#               print("name is not  allowed the any numbers & spl charactors")
#               return render_template("notsplchar.html")
#     else:
#         print(" first fill the name")
#         return render_template("firstfname.html")
                


# if __name__ == "__main__":
#     app.run(debug=True)

@app.route("/senw", methods=['POST'])
def send_whatsapp():
    # Retrieve form data
    name = request.form.get("name")
    whatnum = request.form.get("whatnum")

    # Valid characters for name
    valid_chars = set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ")
    # Valid digits for phone number
    valid_nums = set("0123456789")

    # Check if name is provided and valid
    if name:
        if set(name).issubset(valid_chars):
            # Check if phone number is provided and valid
            if whatnum and len(whatnum) == 10 and set(whatnum).issubset(valid_nums):
                # Retrieve email credentials from environment variables
                # mail = os.getenv('praveenasamiduraim@gmail.com')
                # password = os.getenv('hbtlghjxgizzdllv')
                mail = os.getenv('praveenasamiduraim@gmail.com')
                password = os.getenv('hbtlghjxgizzdllv')

                # Check if environment variables are loaded correctly
                if not mail or not password:
                    return jsonify({"status": "error", "message": "Email credentials are not set"})

                tomail = "sweetarts1410@gmail.com"

                # Create email message
                msg = MIMEText(whatnum)
                msg['Subject'] = name
                msg['From'] = mail
                msg['To'] = tomail

                try:
                    # Connect to SMTP server
                    server = smtplib.SMTP('smtp.gmail.com', 587)
                    server.starttls()
                    # Login to SMTP server
                    server.login(mail, password)
                    # Send email
                    server.sendmail(msg['From'], msg['To'], msg.as_string())
                    server.quit()
                    # Return success response
                    return jsonify({"status": "success", "message": "Email sent successfully"})
                except Exception as e:
                    # Return error response if sending email fails
                    return jsonify({"status": "success", "message": f"Failed to send email: {e}"})
            else:
                # Return error response if phone number is invalid
                return jsonify({"status": "error", "message": "Please enter a valid 10-digit phone number"})
        else:
            # Return error response if name contains invalid characters
            return jsonify({"status": "error", "message": "Name cannot contain numbers or special characters"})
    else:
        # Return error response if name is not provided
        return jsonify({"status": "error", "message": "Please enter your name"})

if __name__ == "__main__":
    app.run(debug=True)



# @app.route("/senw", methods=['POST'])
# def send_whatsapp():
#     name = request.form.get("name")
#     whatnum = request.form.get("whatnum")

#     valid_chars = set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ")
#     valid_nums = set("0123456789")

#     if name:
#         if set(name).issubset(valid_chars):
#             if len(whatnum) == 10 and set(whatnum).issubset(valid_nums):
#                 mail = os.environ.get('ramraja.e99@gmail.com')
#                 password = os.environ.get('eghj vcft gxgg ggbr')

#                 # Debugging: Print the loaded environment variables
#                 print(f"Loaded EMAIL_USER: {mail}")
#                 print(f"Loaded EMAIL_PASS: {password}")
                

#                 # Check if environment variables are loaded correctly
#                 if not mail or not password:
#                     return jsonify({"status": "error", "message": "Email credentials are not set"})

#                 tomail = "sweetarts1410@gmail.com"

#                 msg = MIMEText(whatnum)
#                 msg['Subject'] = name
#                 msg['From'] = mail
#                 msg['To'] = tomail

#                 try:
#                     server = smtplib.SMTP('smtp.gmail.com', 587)
#                     server.starttls()
#                     server.login(mail, password)
#                     server.sendmail(msg['From'], msg['To'], msg.as_string())
#                     server.quit()
#                     return jsonify({"status": "success", "message": "Email sent successfully"})
#                 except Exception as e:
#                     return jsonify({"status": "error", "message": f"Failed to send email: {e}"})
#             else:
#                 return jsonify({"status": "error", "message": "Please enter a valid 10-digit phone numbers"})
#         else:
#             return jsonify({"status": "error", "message": "Name cannot contain numbers or special characters"})
#     else:
#         return jsonify({"status": "error", "message": "Please enter your name"})

# if __name__ == "__main__":
#     app.run(debug=True)

