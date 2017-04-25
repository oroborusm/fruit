class Contact < ActiveRecord::Base
  validates_presence_of :name, length: {minimum:5}, message: "Tu nombre es requerido para el contacto"
  validates_presence_of :email, length: {minimum:5}, message: "Tu correo es requerido para el contacto"
  validates_presence_of :body, message: "Necesitamos que nos comentes que necesitas"
end
