export const enum Endpoints {
  BASE_ENDPOINT = 'https://ll.thespacedevs.com/2.2.0/',
  AGENCIES_ENDPOINT = 'agencies/',
  ASTRONAUTS_ENDPOINT = 'astronaut/',
  UPCOMING_EVENTS_ENDPOINT = 'event/upcoming/',
  LAUNCH_ENDPOINT = 'launch/',
  PREVIOUS_LAUNCH_ENDPOINT = 'launch/previous/',
  UPCOMING_LAUNCH_ENDPOINT = 'launch/upcoming/',
  GO_FOR_LAUNCHES_ENDPOINT = 'launch/?name=&slug=&rocket__configuration__name=&rocket__configuration__id=&status=1&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&rocket__spacecraftflight__spacecraft__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=&mission__orbit__name=&mission__orbit__name__icontains=&r_spacex_api_id=&net__gt=&net__lt=&net__gte=&net__lte=&window_start__gt=&window_start__lt=&window_start__gte=&window_start__lte=&window_end__gt=&window_end__lt=&window_end__gte=&window_end__lte=&last_updated__gte=&last_updated__lte=',
  PREVIOUS_LAUNCHES_ENDPOINT = 'launch/previous',
}
