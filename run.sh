case "$(uname -s)" in

   Darwin|Linux)
     echo 'todo'
     ;;

   CYGWIN*|MINGW32*|MSYS*|MINGW*)
     echo 'MS Windows'
     /git-bash.exe -i -c '
      # Change the title  
      PS1="\[\e]0;client\a\]\n\[\e[32m\]\u@\h \[\e[33m\]\w\[\e[0m\]\n\$ " &&
      echo -ne "\033]2;client\007" && 

      cd client && 
      npm start && 
      exec bash' &
     /git-bash.exe -i -c '
      PS1="\[\e]0;api\a\]\n\[\e[32m\]\u@\h \[\e[33m\]\w\[\e[0m\]\n\$ " &&
      echo -ne "\033]2;api\007" && 
      cd api && 
      python run.py && 
      exec bash' &
     ;;

esac