import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class AiService {
  openAi: OpenAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  chat(message: string): Promise<string> {
    return this.openAi.chat.completions
      .create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      })
      .then((res) => res.choices[0].message.content)
      .catch((err) => err);
  }
}
