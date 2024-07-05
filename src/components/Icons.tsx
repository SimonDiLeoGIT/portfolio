import react_icon from '../assets/icons/react.svg'
import typescript_icon from '../assets/icons/typescript.svg'
import vite_icon from '../assets/icons/vite.svg'
import tailwind_icon from '../assets/icons/tailwind.svg'
import html_icon from '../assets/icons/html.svg'
import css_icon from '../assets/icons/css.svg'
import javascript_icon from '../assets/icons/javascript.svg'
import java_icon from '../assets/icons/java.svg'
import python_icon from '../assets/icons/python.svg'
import mysql_icon from '../assets/icons/mysql.svg'
import postgresql_icon from '../assets/icons/postgresql.svg'
import kubernetes_icon from '../assets/icons/kubernetes.svg'
import docker_icon from '../assets/icons/docker.svg'
import googleCloud_icon from '../assets/icons/google-cloud.svg'

export interface IconProps {
  html?: true
  react?: true
  typescript?: true
  vite?: true
  tailwind?: true
  css?: true
  javascript?: true
  java?: true
  python?: true
  mysql?: true
  postgresql?: true
  kubernetes?: true
  docker?: true
  googleCloud?: true
}

const iconMap: { [key: string]: string } = {
  html: html_icon,
  css: css_icon,
  javascript: javascript_icon,
  typescript: typescript_icon,
  react: react_icon,
  vite: vite_icon,
  tailwind: tailwind_icon,
  java: java_icon,
  python: python_icon,
  mysql: mysql_icon,
  postgresql: postgresql_icon,
  docker: docker_icon,
  kubernetes: kubernetes_icon,
  googleCloud: googleCloud_icon,
};

export const Icons: React.FC<IconProps> = (IconProps) => {
  return (
    <ul className='flex items-center space-x-4'>
      {Object.entries(IconProps).map(
        ([key, value]) =>
          value && (
            <li key={key}>
              <img src={iconMap[key]} className='w-6' alt={`${key} icon`} />
            </li>
          )
      )}
    </ul>
  );
};