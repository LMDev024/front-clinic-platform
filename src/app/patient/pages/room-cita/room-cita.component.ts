import { Component } from '@angular/core';

@Component({
  selector: 'app-room-cita',
  templateUrl: './room-cita.component.html',
  styleUrls: ['./room-cita.component.scss']
})
export class RoomCitaComponent {
  chatMessages: any[] = []; // Array para almacenar los mensajes del chat
  newMessage: string = ''; // Variable para almacenar el nuevo mensaje

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message = {
        sender: 'Usuario',
        content: this.newMessage
      };
      this.chatMessages.push(message);
      this.newMessage = ''; // Reiniciar el campo de entrada de mensaje

      // Agregar respuesta predefinida
      const botResponse = {
        sender: 'Bot',
        content: 'Esta es una respuesta predefinida'
      };
      this.chatMessages.push(botResponse);
    }
  }
}
