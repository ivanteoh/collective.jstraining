from Products.CMFPlone.resources import add_resource_on_request
from Products.Five import BrowserView


class DateTimePickerView(BrowserView):

    def __call__(self):
        # utility function to add resource to rendered page
        add_resource_on_request(self.request, 'datetimepicker')
        return super(DateTimePickerView, self).__call__()
