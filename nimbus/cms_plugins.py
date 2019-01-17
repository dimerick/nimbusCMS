from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _
from .models import Partner, TeamMember

@plugin_pool.register_plugin
class PartnersPlugin(CMSPluginBase):
    model = CMSPlugin
    name = _("Partners Plugin")
    render_template = "partner_list.html"
    cache = False

    def render(self, context, instance, placeholder):
        context['partners'] = Partner.objects.order_by('position')
        return context

@plugin_pool.register_plugin
class MembersPlugin(CMSPluginBase):
    model = CMSPlugin
    name = _("Members Plugin")
    render_template = "member_list.html"
    cache = False

    def render(self, context, instance, placeholder):
        context['active_members'] = TeamMember.objects.order_by('name').filter(is_active=True)
        context['inactive_members'] = TeamMember.objects.order_by('name').filter(is_active=False)
        return context
