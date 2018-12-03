 <?php
      $postdata = file_get_contents("php://input");    
      $request = json_decode($postdata);
      $name = $request->name;
      $email = $request->email;
      $phone = $request->phone;
      $text = $request->text;
      $message = "<table border='1' cellpadding='10px'>
                      <tr>
                          <td>Имя</td>
                          <td>".$name."</td>
                      </tr>
                      <tr>
                          <td>Email</td>
                          <td>".$email."</td>
                      </tr>
                      <tr>
                          <td>Телефон</td>
                          <td>".$phone."</td>
                      </tr>
                      <tr>
                          <td>Сообщение</td>
                          <td>".$text."</td>
                      </tr>
                </table>";
      $headers = "From: pntrans.info\r\n";
      $headers .= "Content-Type: text/html; charset=utf-8\r\n";
      echo $message;
      if(!empty($name) && !empty($email) && !empty($text)){
            $result = mail('office@nerudtrade.ru', 'Сообщение с сайта nerudtrade.ru', $message, $headers);
            $result = mail('kpozdnikin@gmail.com', 'Сообщение с сайта nerudtrade.ru', $message, $headers);
            if($result)
            {
                  echo 'Письмо отправлено';
            }
            else
            {
                  echo 'Ошибка!';
            }
      }
      else{
            echo 'Поля не заполнены!';
      }
?> 