---
layout: single
title:  "System Administration"
date:   2024-02-23 19:25:10 +0000
categories: learning
highlight_home: true
tags: Code
header:
  overlay_image: /assets/images/pexels-pixabay-247791.jpg
  teaser: /assets/images/pexels-pixabay-247791.jpg
---

In  Team work with two classmates we developed a network on VMware vSphere environment.

<br/>
We deployed 3 zones in a network with diferent grades of access and in each zone linux and windows servers and machines.
The diferent zones are guarded by firewalls that are configured to restrict and allow acces. We also created an IPsec VPN connection to access the site in a protected mode. Inside the Zones we deployed load balancers, apache servers, Databases and an Q2A app that uses those resources. 
to further explain our work we developed a progresive set of tutorials that can serve as a guide to perform the same task in your choose platform. 
These are some of those tutorials. Monitoring tools like SIEM, Wireshark and IDS-sensors where also configured in diferent stages of the project. 

Here are the final tutorials and diagrams of the final project:
- [General Diagram] [diagram]
- [Create VMs in vSphere] [VM]
- [Installing and initial configurations of firewalls] [firewalls]
- [Active Directory in Windows] [ADWindows]
- [Active Directory for Linux (yes we can)] [ADLinux]
- [DNS and DHCP on Windows with firewall configurations] [DNS-DHCP]
- [Proxy services examples (Unbound and Squid installations)] [proxy-services]
- [IDS (intrusion detection system) Installing Onion] [IDS]
- [SIEM (security information and event management) Splunk installation] [splunk]
- [Wireshark installation] [wireshark]
- [Web services with Privoxy and Acrylic installation] [webProxy]
- [Tiered App (Q2A) Apache and MariaDB installation with a load balancer] [TApp]

[diagram]: https://carlosdgerez.github.io/tutorialsSystems/
[firewalls]: https://carlosdgerez.github.io/tutorialsSystems/Firewalls.pdf
[ADWindows]: https://carlosdgerez.github.io/tutorialsSystems/Active-Directory.pdf
[ADLinux]: https://carlosdgerez.github.io/tutorialsSystems/ActiveDirectory&Cockpit.pdf
[DNS-DHCP]: https://carlosdgerez.github.io/tutorialsSystems/DNS-DHCP-Windows-server.pdf
[proxy-services]: https://carlosdgerez.github.io/tutorialsSystems/Proxy-Services-team.pdf
[IDS]: https://carlosdgerez.github.io/tutorialsSystems/IDS-Sensor.pdf
[splunk]: https://carlosdgerez.github.io/tutorialsSystems/SIEM.pdf
[wireshark]: https://carlosdgerez.github.io/tutorialsSystems/Wireshark.pdf
[VM]: https://carlosdgerez.github.io/tutorialsSystems/ServerVMs.pdf
[webProxy]: https://carlosdgerez.github.io/tutorialsSystems/Acrylic-dns-privoxy-web-proxy.pdf
[TApp]: https://carlosdgerez.github.io/tutorialsSystems/TieredApp.pdf
<br />
 

